
const express = require('express'),
    proxy = require('http-proxy-middleware');

let target = 'https://www.dsw.com';

const onProxyReq = (proxyReq, req, res) => {
    proxyReq.setHeader("host", "www.dsw.com");
    proxyReq.setHeader("origin", "www.dsw.com");
    proxyReq.setHeader("referer", "www.dsw.com");
    proxyReq.setHeader("accept", "*/*");
    proxyReq.setHeader("user-agent", "GoogleBot");
   proxyReq.setHeader("cookie", "bm_sz=4B78E7B4F661CF7409D6C00DC11813FF~YAAQPl3bFwLD+rprAQAA7J5UvQR+5jmPToTaYw23nhOMbtr0G7eZKeIjJeCJSXzwZfxX3ne9IIR7ydCvHL/1tITl+A61q0iwmhT+hlj9EyUFNNzzXwSE7eEymtj3zXjspBaOhYSVCn+2LESE2g4jjh6BduWZB1/ZWwUsJaUUU6OF00SoCakki0Levjbu; check=true; _abck=F43AFC05203F01C3A2B6FE77D494B4B1~0~YAAQPl3bFxnD+rprAQAAYqRUvQJ1xy3d8GKAvTFXa0yIgnkwT0lMarU2pWbjcgmAgN2mw/j9Cjg8z4brrmwAjwx0yqBb24RibYsHm1ZgIE7lrIQR5k6ue09YbFGCl/m5Qzc1S3h4z0M3IfHJx+DYjVYo0C+hKcHLMqoYbLs9s2BNWONzHXsLtHfgK0YRch+dCsDvOaeBFRqV0+ASmKSheHRELvnpP5GLOKoZKzBcDU5H5j+kssS27U0UWJF1wIZJNtbkuuJMXCrUrXxoDdPcGwj+INWAgpBARuzEUPFq3ftaF8HxT0U=~-1~-1~-1; locale=en_US; pushSite=DSW; AMCVS_A8683BC75245AF560A490D4D%40AdobeOrg=1; JSESSIONID=OGBNNEf4b8d2bB95dYTMHh6S.ATGPS018.PROD1A; TIER=GUEST; MOUS=7; _dynSessConf=-666993888683890484; ak_bmsc=CA35FB632C8A7852744A9DF39C0EBD3017DB5D3EAA5900005F091E5DA480321F~plX3MpZUJ5RS07QvENpZfEsYqvYmPy0FN2JDLe2/9dJVfAz7eZlVVY1BB7K/FLo0nQhkRUVEihmsyuj6Bt2Ao4u8moD60XiAGkO/QoO9rY1FkWSBG7dqm/QfOeI/Qa8aI9RBEI40PufRg6m0Tq2PiZQi47hpJ60D44zTB2KkQsODovyDsHiu2+vLlQ5RG3omVeyJL3nfJW0WKqO0SqvBMuyyXayo/E+Ozx1roiKVeXMoh0kQ6DJsMboWckT7r5zc/S; s_ecid=MCMID%7C33965181215914999892652293027251032404; AMCV_A8683BC75245AF560A490D4D%40AdobeOrg=-894706358%7CMCIDTS%7C18082%7CMCMID%7C33965181215914999892652293027251032404%7CMCAAMLH-1562854370%7C7%7CMCAAMB-1562854370%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1562256770s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C2.3.0; BVBRANDID=b6e63ac6-456e-4fd5-b44b-5e45e4d204c3; BVBRANDSID=a7140683-e945-45a9-9522-23a960dcaba6; mboxEdgeCluster=17; RES_TRACKINGID=58756666750999; RES_SESSIONID=225747789761570; ResonanceSegment=1; s_lv_s=First%20Visit; s_cc=true; __utma=253152284.1437150899.1562249574.1562249574.1562249574.1; __utmc=253152284; __utmz=253152284.1562249574.1.1.utmcsr=yandex|utmccn=(organic)|utmcmd=organic; IR_gbd=dsw.com; cto_lwid=d1ffc632-84f8-4715-9fa6-454aac58f26c; _scid=7b61fa6a-7541-4247-8f11-8299ecd18f7b; _gcl_au=1.1.294580107.1562249575; _mibhv=anon-1562249575118-5017854423_6541; _ga=GA1.2.1437150899.1562249574; _gid=GA1.2.1307776086.1562249575; _fbp=fb.1.1562249575801.147381460; _sctr=1|1562187600000; mbox=session#ad3f75e6dbbd4afe86fd10edb8501ded#1562252094|PC#ad3f75e6dbbd4afe86fd10edb8501ded.17_52#1625494373; utag_main=v_id:016bbd54b3d60011570fd09191700508e001a08600978$_sn:1$_ss:0$_st:1562252034040$ses_id:1562249573335%3Bexp-session$_pn:4%3Bexp-session; bm_sv=402782346FD4636D4F6DE1A1DDEFA1FA~fGH9fCZzu4inYZ2H/2cnPnpDD08Qxhx1dDk3Mc+j7F8UI9UuDZlc/qj9p/olCHT/RKq74DKAfTkv9m8Wf10VpeURuZ/+uE8SwPSM3/SOI+UjCuPS/NTKDjMCT3MK/26sAa8D+Si1tSCR16yKJFfHmg==; s_lv=1562250234321; __utmt=1; __utmb=253152284.4.10.1562249574; IRMS_la4837=1562250234536; _derived_epik=dj0yJnU9Xzg3VGVLWXZaN21GTmh5MjVWdENTVzdRZnZJLTJSWHombj1YRjVOazQzbFlfSG5oRElLS1d3Yjl3Jm09NyZ0PUFBQUFBRjBlQ193; smtrrmkr=636978470426254997%5E9839e2d4-659e-e911-8191-cda5d6318f78%5E9939e2d4-659e-e911-8191-cda5d6318f78%5E0%5E204.48.16.32");
   
    console.log(proxyReq);
};

const onProxyRes = (proxyRes, req, res) => {
    //proxyReq.setHeader("set-cookie", "bm_sv=402782346FD4636D4F6DE1A1DDEFA1FA~fGH9fCZzu4inYZ2H/2cnPnpDD08Qxhx1dDk3Mc+j7F8UI9UuDZlc/qj9p/olCHT/RKq74DKAfTkv9m8Wf10VpeURuZ/+uE8SwPSM3/SOI+VmfMzwy2EmW3yp8CKKRNZee9q2BdXgYX10dEclpoqWjg==; Domain=.dsw.com; Path=/; Max-Age=6654; HttpOnly");
};

module.exports = (port) => {
    const app = express();
    app.use('/', proxy({ target, changeOrigin: true, secure: false, hostRewrite: true, toProxy: true, protocolRewrite: "http", autoRewrite: true, cookieDomainRewrite: "dsw.ditherx.xyz",  onProxyRes, onProxyReq}));
    app.listen(port, "0.0.0.0", () => console.log('Server is started on port ' + port));
};

