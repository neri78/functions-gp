exports.handler = function(context, event, callback) {
 
  let body = 'パラメータがなければこのメッセージが表示されます。';
  //パラメータが存在するかを確認
  if (event) {
  
    // Subscription Verify (GET)用のパラメータがセットされているかを確認
    if (event['hub.challenge']) {
      // GETリクエスト用の処理
      body = 'GET';
    }
    // Notification (POST)用のパラメータがセットされているかを確認
    else if (event.data) {
      // POSTリクエスト用の処理
      body = 'POST';
    }
  }
  //コールバック関数に結果を渡す
  callback(null, body);
 };
