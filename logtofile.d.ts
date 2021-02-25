// Type definitions for cordova.plugins.logtofile

/// <reference types="cordova"/>

interface LogToFile {
    setLogfilePath(
        path: string,
        successCallback: () => void,
        errorCallback: (error) => void
    ): void;
    getLogfilePath(
        successCallback: () => void,
        errorCallback: (error) => void
    ):void;
    getArchivedLogfilePaths(
        successCallback: (paths: string[]) => void,
        errorCallback: (error) => void
    ):void;
    debug(
        log: string,
        successCallback: () => void,
        errorCallback: (error) => void
    ): void;
    info(
        log: string,
        successCallback: () => void,
        errorCallback: (error) => void
    ): void;
    warn(
        log: string,
        successCallback: () => void,
        errorCallback: (error) => void
    ): void;
    error(
        log: string,
        successCallback: () => void,
        errorCallback: (error) => void
    ): void;
}

interface CordovaPlugins {
    logtofile: LogToFile
}
