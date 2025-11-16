/**
 * A simple function to test the CI/CD deployment.
 * When you deploy, you can check the Google Apps Script editor
 * to see if this code has been updated.
 */
function checkDeploymentVersion() {

    // 1) 현재 스크립트가 연결된 스프레드시트 가져오기
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // 2) 첫 번째 시트 또는 이름으로 시트 가져오기
    //    - 첫 번째 시트: getSheets()[0]
    //    - 특정 시트명: getSheetByName("시트1")
    const sheet = ss.getSheets()[0];
    // const sheet = ss.getSheetByName("시트1"); // 시트 이름이 확실하면 이 줄로 교체

    // 3) A1 셀에 값 쓰기
    const value = "배포 테스트 완료"; // 원하는 값으로 수정
    sheet.getRange("A1").setValue(value);
}

/**
 * This function is just here to make it a valid Apps Script project.
 * You can add any code you want here.
 */
function myFunction() {
  // Your code
}