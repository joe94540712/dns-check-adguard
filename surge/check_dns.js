const { v4, v6 } = $network;

let errorMessage = {
  title: 'Customize DNS',
  content: '無使用Personal DNS',
  icon: 'xmark.shield.fill',
  'icon-color': '#FE6245',
};

const successMessage_adg = {
  title: 'Adguard DNS',
  content: 'Adguard DNS is working...',
  icon: 'checkmark.shield.fill',
  'icon-color': '#1FCFB4',
};

const successMessage_adh = {
  title: 'Adguard Home',
  content: 'Adguard Home is working...',
  icon: 'checkmark.shield.fill',
  'icon-color': '#1FCFB4',
};

const successMessage_next = {
  title: 'NextDNS',
  content: 'NextDNS is working...',
  icon: 'checkmark.shield.fill',
  'icon-color': '#1FCFB4',
};

if (!v4.primaryAddress && !v6.primaryAddress) {
  errorMessage.content = '\n錯誤：未連上網路';
  $done(errorMessage);
} else {
  $httpClient.get('https://check.joe.dns', function (error, response, data) {
    if (error) {
      errorMessage.content += '\n錯誤：' + error;
      $done(errorMessage);
    }
    if (data.includes('Adguard DNS (Personal) is running...')) {
      $done(successMessage_adg);
    }
    if (data.includes('Adguard Home is running...')) {
      $done(successMessage_adh);
    }
    if (data.includes('NextDNS is running...')) {
      $done(successMessage_next);
    }    
    $done(errorMessage);
  });
}
