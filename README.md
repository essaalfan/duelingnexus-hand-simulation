# DuelingNexus Tools – Start-Hand Simulator & Replay Deck Downloader (Chrome Extension)

Chrome extension designed for [DuelingNexus](https://duelingnexus.com).

## Description

Enhances the DuelingNexus experience with two major tools:
- 🎴 Start-Hand Simulator — Adds a “Test-Hand” button to your decks with “Going First” and “Going Second” options.
    - Simulate opening hands directly from your deck editor
    - Draw card by card to test consistency

- 📥 Replay Deck Downloader — Adds download buttons on replay pages.
    - Download your or your opponent’s deck in standard .ydk format
    - Deck files include real player names

## Getting Started

### Dependencies

* [Google Chrome](https://www.google.com/chrome/)

### Installing (Store)

* Install from [chrome web store](https://chrome.google.com/webstore/detail/duelingnexus-start-hand-s/phlcobfmohlcpljfmlmmbjgcccobkodj)

### Installing (Manual)

* Download this project and follow the [instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) to load this extension manually 

## Authors

[@EssaAlfan](https://github.com/essaalfan)

## Version History
* 1.0.5
    * ✨ Added Replay Deck Downloader feature
    * Supports downloading your or opponent’s deck from replay pages
    * Uses real player names in filenames
    * Proper .ydk format with headers and sorted cards
    * Manifest updated for replay page support and permissions
    * Robust error handling and cross-domain support
* 1.0.4
    * Fixed updated DOM structure for card images after DuelingNexus site changes
* 1.0.3
    * Added the ability to draw card by card
    * See [commit change](https://github.com/essaalfan/duelingnexus-hand-simulation/commit/d0d93f1af58b438f1eac6db51720bb2de2807cd6)
* 1.0.2
    * Allow extension to support subdomain [ptr.duelingnexus.com](https://ptr.duelingnexus.com)
    * See [commit change](https://github.com/essaalfan/duelingnexus-hand-simulation/commit/3573acabf07631bfe2b6c38eb6e8a7641c874d7c)
* 1.0.0
    * Initial Release

## License

This code is published under the [MIT License](http://opensource.org/licenses/MIT). This means you can do almost anything with it, as long as the copyright notice and the accompanying license file is left intact.

## Acknowledgments

* [sweetalert2](https://sweetalert2.github.io/)