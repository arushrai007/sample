# Installation Guide - CD Browser

## Quick Install (3 Steps)

### Step 1: Navigate to the browser folder
```bash
cd python-browser
```

### Step 2: Install dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Run the browser
```bash
python main.py
```

**Done!** The browser window should open.

---

## Troubleshooting

### Error: "ModuleNotFoundError: No module named 'aifc'"

This is a Python 3.13 issue. **You don't need to fix it!**

The browser works perfectly without voice recognition. Voice is completely optional.

If you still want voice later, you can install it with:
```bash
pip install SpeechRecognition pyaudio
```

### Error: "Python not found"

Make sure Python is installed: https://www.python.org/downloads/

**Important:** Check "Add Python to PATH" during installation.

Test with:
```bash
python --version
```

### Error: "pip: command not found"

Try:
```bash
python -m pip install -r requirements.txt
```

Or on Linux/Mac:
```bash
pip3 install -r requirements.txt
python3 main.py
```

### On Linux, missing libraries

```bash
sudo apt-get install python3-pyqt5 python3-pyqt5.qtwebengine
pip install -r requirements.txt
```

### On Mac, security warning

- Click "Open" or "Open Anyway" if you get a security prompt
- Or: `xattr -d com.apple.quarantine /path/to/python`

---

## What's Required

✅ **Required:**
- Python 3.8 or higher
- Internet connection (for web browsing)

✅ **Optional:**
- Microphone (for voice commands)
- `SpeechRecognition` package (if you want voice - see step 2 above)

---

## You're Ready!

Start browsing:
1. Type a URL (e.g., `google.com`)
2. Press Enter
3. Browse!

**Features available right now:**
- ✅ Web browsing
- ✅ Tabs
- ✅ Bookmarks
- ✅ Back/Forward/Refresh
- ✅ Search

**Features you can add later:**
- 🎤 Voice commands (optional)

---

## For Python 3.13 Users

If you're using Python 3.13 and get the `aifc` error:

**This is completely normal.** Just ignore it.

The browser will work great without voice recognition. All other features work perfectly!

If you want voice later, use Python 3.11 or 3.12 instead, or wait for a fix.

---

## Next Steps

- Read [QUICK_START.md](QUICK_START.md) for usage guide
- Read [README.md](README.md) for full feature list
- Start browsing!
