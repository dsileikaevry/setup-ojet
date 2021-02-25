import * as core from '@actions/core'
import * as semver from 'semver'
import {
  installCordova,
  installOjet,
  // installJava,
  installPods,
  logInstalledInfo
} from './installer'

async function run(): Promise<void> {
  try {
    checkPlatform()

    // install cordova-cli
    const cordovaVersion = core.getInput('cordova-version')
    if (checkVersion(cordovaVersion)) {
      await installCordova(cordovaVersion)
    }

    // install ojet-cli
    const ojetVersion = core.getInput('ojet-version')
    if (checkVersion(ojetVersion)) {
      await installOjet(ojetVersion)
    }

    // install specific version of java and gradle
    // await installJava()

    // install cocoapods
    await installPods()

    // run `ionic info`
    // await logInstalledInfo()
  } catch (error) {
    core.setFailed(error.message)
  }
}

function checkPlatform(): void {
  if (process.platform !== 'linux' && process.platform !== 'darwin') {
    throw new Error(
      '@dsileikaevry/setup-ojet only supports either Ubuntu Linux or MacOS at this time'
    )
  }
}

function checkVersion(version: string): boolean {
  if (!version || semver.valid(version) || semver.validRange(version)) {
    return true
  }

  throw new Error(`Error, ${version} is not a valid format.`)
}

run()
