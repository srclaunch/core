import { License, PackageType, PublishAccess } from '@srclaunch/types';
export declare const PROJECT_PACKAGE_JSON_AUTHOR = "Steven Bennett <steven@srclaunch.com>";
export declare const PROJECT_PACKAGE_JSON_LICENSE = License.MIT;
export declare const PROJECT_PACKAGE_JSON_PUBLISH_CONFIG: {
    access: typeof PublishAccess;
    registry: string;
};
export declare const PROJECT_PACKAGE_JSON_TYPE = PackageType.Module;
export declare const PROJECT_PACKAGE_JSON_MAIN = "./dist/index.esm.js";
export declare const PROJECT_PACKAGE_JSON_TYPES = "./dist/index.d.ts";
export declare const PROJECT_PACKAGE_JSON_FILES: string[];
export declare const PROJECT_PACKAGE_JSON_MODULE = "./dist/index.esm.js";
export declare const PROJECT_PACKAGE_JSON_COMMON_SCRIPTS: {
    yui: string;
    qr: string;
};
export declare const PROJECT_PACKAGE_JSON_BUILD_SCRIPTS: {
    build: string;
};
export declare const PROJECT_PACKAGE_JSON_RELEASE_SCRIPTS: {
    release: string;
};
export declare const PROJECT_PACKAGE_JSON_DEV_SCRIPTS: {
    dev: string;
};
export declare const PROJECT_PACKAGE_JSON_PREVIEW_SCRIPTS: {
    preview: string;
};
export declare const PROJECT_PACKAGE_JSON_QA_SCRIPTS: {
    qa: string;
};
export declare const PROJECT_PACKAGE_JSON_PRODUCTION_SCRIPTS: {
    start: string;
};
export declare const PROJECT_PACKAGE_JSON_TEST_SCRIPTS: {
    test: string;
    'test:watch': string;
    'test:coverage': string;
};
//# sourceMappingURL=project.d.ts.map