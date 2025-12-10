import pyttsx3
import threading

try:
    import speech_recognition as sr
    SPEECH_RECOGNITION_AVAILABLE = True
except (ModuleNotFoundError, ImportError):
    SPEECH_RECOGNITION_AVAILABLE = False
    sr = None


class VoiceHandler:
    def __init__(self, on_command_callback=None):
        if SPEECH_RECOGNITION_AVAILABLE:
            self.recognizer = sr.Recognizer()
        else:
            self.recognizer = None

        self.engine = pyttsx3.init()
        self.engine.setProperty("rate", 150)
        self.on_command_callback = on_command_callback
        self.listening = False
        self.available = SPEECH_RECOGNITION_AVAILABLE

    def speak(self, text):
        """Speak text using text-to-speech"""
        self.engine.say(text)
        self.engine.runAndWait()

    def listen(self):
        """Listen for voice input"""
        if not SPEECH_RECOGNITION_AVAILABLE:
            self.speak("Voice recognition is not available on this system")
            print("Voice recognition not available. Install with: pip install SpeechRecognition pyaudio")
            return None

        try:
            with sr.Microphone() as source:
                self.recognizer.adjust_for_ambient_noise(source, duration=1)
                print("Listening... (speak now)")
                audio = self.recognizer.listen(source, timeout=5)
                text = self.recognizer.recognize_google(audio)
                print(f"Heard: {text}")
                return text.lower()
        except sr.UnknownValueError:
            self.speak("Sorry, I could not understand that")
            return None
        except sr.RequestError as e:
            self.speak("Microphone error. Please check your audio setup")
            print(f"Microphone error: {e}")
            return None
        except Exception as e:
            print(f"Error: {e}")
            return None

    def start_listening_thread(self):
        """Start listening in a background thread"""
        thread = threading.Thread(target=self._listen_loop, daemon=True)
        thread.start()

    def _listen_loop(self):
        """Continuous listening loop"""
        self.listening = True
        while self.listening:
            command = self.listen()
            if command and self.on_command_callback:
                self.on_command_callback(command)

    def stop_listening(self):
        """Stop the listening loop"""
        self.listening = False

    def process_command(self, command):
        """Process voice commands"""
        if not command:
            return None

        commands = {
            "back": "back",
            "forward": "forward",
            "refresh": "refresh",
            "reload": "refresh",
            "new tab": "new_tab",
            "new window": "new_window",
            "close tab": "close_tab",
            "open bookmark": "open_bookmark",
            "bookmark this": "bookmark_current",
            "show bookmarks": "show_bookmarks",
        }

        # Check for exact commands first
        for key, action in commands.items():
            if key in command:
                return action

        # Check for search/navigation keywords
        if "search" in command or "find" in command:
            # Extract search query
            query = command.replace("search", "").replace("find", "").strip()
            if "for" in query:
                query = query.split("for", 1)[1].strip()
            return {"action": "search", "query": query}

        if "go to" in command or "navigate" in command:
            url = command.replace("go to", "").replace("navigate to", "").strip()
            return {"action": "navigate", "url": url}

        if "switch to" in command or "tab" in command:
            if "tab" in command:
                try:
                    tab_num = int(
                        "".join(filter(str.isdigit, command.split("tab")[1]))
                    )
                    return {"action": "switch_tab", "tab_number": tab_num}
                except (ValueError, IndexError):
                    pass

        return None

    def speak_confirmation(self, action):
        """Speak a confirmation of the action"""
        confirmations = {
            "back": "Going back",
            "forward": "Going forward",
            "refresh": "Refreshing page",
            "new_tab": "Opening new tab",
            "new_window": "Opening new window",
            "close_tab": "Closing tab",
            "open_bookmark": "Opening bookmark",
            "bookmark_current": "Bookmarking current page",
            "show_bookmarks": "Showing bookmarks",
        }

        if isinstance(action, dict):
            if action.get("action") == "search":
                self.speak(f"Searching for {action.get('query')}")
            elif action.get("action") == "navigate":
                self.speak(f"Navigating to {action.get('url')}")
            elif action.get("action") == "switch_tab":
                self.speak(f"Switching to tab {action.get('tab_number')}")
        elif action in confirmations:
            self.speak(confirmations[action])
