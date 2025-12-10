class SearchHandler:
    @staticmethod
    def get_search_url(query):
        """Convert search query to DuckDuckGo search URL"""
        if not query:
            return None

        query = query.strip()

        # Check if it's already a URL
        if query.startswith("http://") or query.startswith("https://"):
            return query
        if query.startswith("www."):
            return "https://" + query

        # DuckDuckGo search URL
        search_url = f"https://duckduckgo.com/?q={query.replace(' ', '+')}"
        return search_url

    @staticmethod
    def normalize_url(url):
        """Normalize URL for navigation"""
        if not url:
            return None

        url = url.strip()

        if url.startswith("http://") or url.startswith("https://"):
            return url
        if url.startswith("www."):
            return "https://" + url

        # If it looks like a domain, add https
        if "." in url and " " not in url:
            return "https://" + url

        # Otherwise, treat as search query
        return SearchHandler.get_search_url(url)
