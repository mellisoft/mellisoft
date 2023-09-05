/**
 * Configuration settings specific to the application
 *
 * @export
 * @interface EnvironmentConfiguration
 */
export interface EnvironmentConfiguration {
    version: string,
    production: boolean;
    environment: string,
    environmentName :string,
    baseUri:string,
    apiBaseUrl:string,
}