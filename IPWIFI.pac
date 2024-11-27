function FindProxyForURL(url, host) {
    // Domains to bypass the proxy
    var directAccessDomains = [
        "*.local",
        "localhost",
        "127.0.0.1"
    ];

    // Check if the host matches any of the direct access domains
    for (var i = 0; i < directAccessDomains.length; i++) {
        if (shExpMatch(host, directAccessDomains[i])) {
            return "DIRECT";
        }
    }

    // Define the proxy with credentials
    var proxy = "HTTPS MajnqXq:J0Zw2IrTP6ZH71Q@us4.4g.iproyal.com:7288";

    // Use the proxy for all other requests
    return proxy;
}
