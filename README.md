## setup-ojet

[![](https://github.com/dsileikaevry/setup-ojet/workflows/CI/badge.svg)](https://github.com/dsileikaevry/setup-ojet/actions)

Set up your GitHub Actions workflow with Cordova/Oracle JET environment. Only supports macos & ubuntu at this time.

## example usage:

```
- name: Use dsileikaevry/setup-ojet
  uses: dsileikaevry/setup-ojet@v1
  with:
    cordova-version: 8

- name: Build
  run: |
    ojet build android

```