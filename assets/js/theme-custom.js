function updateDownloadLinks(os) {
  const downloadLinks = document.getElementsByClassName('download-link');
  for (let i = 0; i < downloadLinks.length; i++) {
    downloadLinks[i].href = urls[os] || urls['Default'];
  }
}

function updateDownloadLinksAllOS() {
  for (let os in urls) {
    const downloadLinks = document.getElementsByClassName(`download-link-${os}`);
    for (let i = 0; i < downloadLinks.length; i++) {
      downloadLinks[i].href = urls[os] || urls['Default'];
    }
  }
}

if (navigator.userAgentData) {
  navigator.userAgentData.getHighEntropyValues(['architecture']).then((result) => {
    let OSName = "Unknown";
    if (window.navigator.userAgent.toLowerCase().indexOf("windows") !== -1) {
      OSName = "Windows";
    } else if (window.navigator.userAgent.toLowerCase().indexOf("mac") !== -1) {
      if (result.architecture && result.architecture.toLowerCase().indexOf("arm") !== -1) {
        OSName = "MacArm";
      } else {
        OSName = "Mac";
      }
    } else if (window.navigator.userAgent.toLowerCase().indexOf("linux") !== -1) {
      OSName = "Linux";
    }
    updateDownloadLinks(OSName);
  }).catch(() => {
    updateDownloadLinks("Unknown")
  });
} else {
  let OSName = "Unknown";
  if (window.navigator.userAgent.toLowerCase().indexOf("windows") !== -1) {
    OSName = "Windows";
  } else if (window.navigator.userAgent.toLowerCase().indexOf("mac") !== -1) {
    OSName = "Mac";
  } else if (window.navigator.userAgent.toLowerCase().indexOf("linux") !== -1) {
    OSName = "Linux";
  }
  updateDownloadLinks(OSName);
}

updateDownloadLinksAllOS();
