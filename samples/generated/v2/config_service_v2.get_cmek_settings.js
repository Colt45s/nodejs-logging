// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START logging_v2_generated_ConfigServiceV2_GetCmekSettings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource for which to retrieve CMEK settings.
   *      "projects/[PROJECT_ID]/cmekSettings"
   *      "organizations/[ORGANIZATION_ID]/cmekSettings"
   *      "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *      "folders/[FOLDER_ID]/cmekSettings"
   *  Example: `"organizations/12345/cmekSettings"`.
   *  Note: CMEK for the Logs Router can currently only be configured for GCP
   *  organizations. Once configured, it applies to all projects and folders in
   *  the GCP organization.
   */
  // const name = 'abc123'

  // Imports the Logging library
  const {ConfigServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new ConfigServiceV2Client();

  async function callGetCmekSettings() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await loggingClient.getCmekSettings(request);
    console.log(response);
  }

  callGetCmekSettings();
  // [END logging_v2_generated_ConfigServiceV2_GetCmekSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
