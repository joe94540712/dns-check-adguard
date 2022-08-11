const { v4, v6 } = $network;

let errorMessage = {
  title: 'Customize DNS',
  content: '無使用Personal DNS',
  icon: 'xmark.shield.fill',
  'icon-color': '#FE6245',
};

const successMessage = {
  title: 'Adguard DNS',
  content: 'Adguard DNS is working...',
  icon: 'checkmark.shield.fill',
  'icon-color': '#1FCFB4',
};

if (!v4.primaryAddress && !v6.primaryAddress) {
  errorMessage.content = '\n錯誤：未連上網路';
  $done(errorMessage);
} else {
  $httpClient.get('https://check.futa.gg', function (error, response, data) {
    if (error) {
      errorMessage.content += '\n錯誤：' + error;
      $done(errorMessage);
    }
    if (data.includes('正在正確地運作')) {
      $done(successMessage);
    }
    $done(errorMessage);
  });
}
