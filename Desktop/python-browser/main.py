#!/usr/bin/env python3
import sys
from PyQt5.QtWidgets import QApplication
from browser import CDBrowser


def main():
    """Main entry point"""
    app = QApplication(sys.argv)
    browser = CDBrowser()
    browser.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
