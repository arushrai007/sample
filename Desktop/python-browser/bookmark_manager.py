import json
import os
from pathlib import Path


class BookmarkManager:
    def __init__(self):
        self.bookmarks_file = Path.home() / ".cd_browser_bookmarks.json"
        self.bookmarks = self.load_bookmarks()

    def load_bookmarks(self):
        """Load bookmarks from file"""
        if self.bookmarks_file.exists():
            try:
                with open(self.bookmarks_file, "r") as f:
                    return json.load(f)
            except (json.JSONDecodeError, IOError):
                return []
        return []

    def save_bookmarks(self):
        """Save bookmarks to file"""
        with open(self.bookmarks_file, "w") as f:
            json.dump(self.bookmarks, f, indent=2)

    def add_bookmark(self, title, url):
        """Add a bookmark"""
        bookmark = {"title": title, "url": url}
        if bookmark not in self.bookmarks:
            self.bookmarks.append(bookmark)
            self.save_bookmarks()
            return True
        return False

    def remove_bookmark(self, url):
        """Remove a bookmark by URL"""
        self.bookmarks = [b for b in self.bookmarks if b["url"] != url]
        self.save_bookmarks()

    def get_bookmarks(self):
        """Get all bookmarks"""
        return self.bookmarks

    def get_bookmark_by_title(self, title):
        """Get bookmark by title (case-insensitive)"""
        title_lower = title.lower()
        for bookmark in self.bookmarks:
            if bookmark["title"].lower() == title_lower:
                return bookmark
        return None

    def is_bookmarked(self, url):
        """Check if URL is bookmarked"""
        return any(b["url"] == url for b in self.bookmarks)
