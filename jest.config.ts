/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  rootDir: __dirname,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['./jest.polyfills.js'],
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testEnvironmentOptions: {
    /**
     * @note Opt-out from JSDOM using browser-style resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    customExportConditions: ['']
  }
}

export default config
