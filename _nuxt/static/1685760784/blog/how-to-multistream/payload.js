__NUXT_JSONP__("/blog/how-to-multistream", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{post:{slug:"how-to-multistream",description:"You don't NEED Restream.io to multistream. Try building it yourself for less!",title:"How to Build a Restream Server",thumbnail:M,createdAt:"2022-03-14T00:00:00.000Z",toc:[{id:N,depth:z,text:O},{id:P,depth:z,text:F},{id:Q,depth:x,text:R},{id:S,depth:z,text:G},{id:T,depth:x,text:U},{id:V,depth:z,text:H},{id:W,depth:x,text:X},{id:Y,depth:x,text:Z},{id:_,depth:x,text:$},{id:aa,depth:x,text:ab},{id:ac,depth:z,text:ad},{id:ae,depth:x,text:af},{id:ag,depth:z,text:ah}],body:{type:"root",children:[{type:b,tag:"blog-post-video",props:{placeholder:M},children:[{type:a,value:ai},{type:b,tag:"iframe",props:{src:"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FduvHW7P37Vw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Lately, I’ve been hearing a lot of talk about giving up on the Twitch Affiliate program and multistreaming to YouTube Gaming, Twitch, Facebook Gaming, or any other streaming platform you like for increased exposure to your content. I’m not going to get into the pros and cons of this approach in this article but will instead focus on how to multistream if you’re interested in doing so. More specifically, the cheapest way I’ve found to do it without overloading your upload connection to your internet provider. This should work with most streaming software but I’ll refer to OBS (Open Broadcaster Software) here."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"If you’re only here to find out how to build your own restream server then you can "},{type:b,tag:e,props:{href:aj},children:[{type:a,value:"jump ahead to here"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:C,props:{id:N},children:[{type:b,tag:e,props:{href:"#first-what-is-multistreaming",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"If you’re not familiar with multistreaming, it essentially duplicates your live stream to multiple sites instead of the standard setup of sending it to one. The options for doing this vary based on where the duplication occurs."}]},{type:a,value:c},{type:b,tag:ak,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:F}]},{type:a,value:": Stream to another web service that will duplicate it"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:G}]},{type:a,value:": Have your PC duplicate the stream locally"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:H}]},{type:a,value:": Build your own web server that will duplicate it\nI’ll go over each option but first, it’s important to understand what an RTMP server is. Some computer on the internet has to receive your encoded stream so it can be displayed to your viewers and RTMP is just an agreement between your PC and the receiver on how to send this information. This article isn’t a deep dive into the RTMP protocol but if you’d like to learn more about it you can "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.adobe.com\u002Fcontent\u002Fdam\u002Facom\u002Fen\u002Fdevnet\u002Frtmp\u002Fpdf\u002Frtmp_specification_1.0.pdf",rel:[s,t,u],target:v},children:[{type:a,value:"start here"}]},{type:a,value:E}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{id:P},children:[{type:b,tag:e,props:{href:"#the-easiest-option",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:B,props:{id:Q},children:[{type:b,tag:e,props:{href:"#send-your-stream-to-another-web-service-that-will-duplicate-it",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Frestream.io\u002Fmultistreaming",rel:[s,t,u],target:v},children:[{type:a,value:"Restream.io"}]},{type:a,value:" hosts an RTMP server that will accept your stream and then forward it to any number of other RTMP servers you like, whether that’s Twitch, Facebook, YouTube, or some other platform. At the time of writing this article, it supports over 30 streaming providers and is by far the easiest option with some of the best features I’ve seen. However, if you don’t want their logo showing up on your streams or would like to stream to more than 2 channels you'll have to "},{type:b,tag:e,props:{href:"https:\u002F\u002Frestream.io\u002Fpricing",rel:[s,t,u],target:v},children:[{type:a,value:"pay $16\u002Fmo"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:C,props:{id:S},children:[{type:b,tag:e,props:{href:"#the-free-option",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:B,props:{id:T},children:[{type:b,tag:e,props:{href:"#have-your-pc-duplicate-the-stream-locally",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"You should expect to pay for services that add a lot of value like Restream but anyone on a budget that only needs basic multistreaming capabilities will probably be looking for a free alternative like "},{type:b,tag:e,props:{href:"https:\u002F\u002Fobsproject.com\u002Fforum\u002Fresources\u002Fmultiple-rtmp-outputs-plugin.964\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"multi-rtmp"}]},{type:a,value:". It’s an OBS plugin that hosts your own RTMP server on your PC that handles the broadcasting instead of Restream.io. This is "},{type:b,tag:"em",props:{},children:[{type:a,value:"an awesome option"}]},{type:a,value:" but has a pretty big problem. Your internet connection will probably struggle with it because the broadcasting is all happening on your local network. For example, if you’re using it to stream to 3 different platforms, then you are uploading 3 versions of your stream. That means for a standard 720p60fps stream getting multistreamed to 3 platforms, you’re uploading 4,500kbps x 3 = 13,500kbps (13.5mbps). Keep this in mind and run a speed test to see how that number compares against the upload speed you’re getting from your ISP."}]},{type:a,value:c},{type:b,tag:C,props:{id:V},children:[{type:b,tag:e,props:{href:aj,ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:B,props:{id:W},children:[{type:b,tag:e,props:{href:"#build-your-own-web-server-that-will-duplicate-it",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"So what can you do if you don’t want to pay $16\u002Fmo on restream and don’t have enough upload speed to use the multi-rtmp OBS plugin? Host your own RTMP server in the cloud! You can do this with a service called Linode that lets you run servers on their platform for a monthly fee."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Fortunately, it doesn’t take much computing power to forward a stream to multiple destinations so you can do this for $5\u002Fmo with their cheapest option. This option also has a 1GB upload speed allowing for up to 650GB uploaded each month which should get you around 80 hours of streaming to 3 platforms. Here’s how to set it up after "},{type:b,tag:e,props:{href:"https:\u002F\u002Flogin.linode.com\u002Fsignup",rel:[s,t,u],target:v},children:[{type:a,value:"sigining up for a Linode account"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:B,props:{id:Y},children:[{type:b,tag:e,props:{href:"#create-a-linode-server",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fcloud.linode.com\u002Flinodes\u002Fcreate",rel:[s,t,u],target:v},children:[{type:a,value:"Create a new Linode server"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose an operating system. I recommend the latest version of Ubuntu"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose the Region closest to you"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose a Linode Plan. The cheapest Nanode 1 GB plan is enough for what we’re doing"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose a password"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Click “Create Linode”\n"},{type:b,tag:"blog-post-image",props:{src:"\u002Fimg\u002Fhow-to-multistream_1.gif"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:B,props:{id:_},children:[{type:b,tag:e,props:{href:"#setup-the-stream-forwarding-service-nginx",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Once it’s done you just need to install and set up NGINX which will run your RTMP service. Linode has a great "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.linode.com\u002Fdocs\u002Fguides\u002Fset-up-a-streaming-rtmp-server\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"step-by-step article"}]},{type:a,value:" on how to do this but essentially you just need to:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Launch the LISH Console for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcloud.linode.com\u002Flinodes?view=grid",rel:[s,t,u],target:v},children:[{type:a,value:"your new Linode"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Install the NGNIX server, RTMP service, and other dependencies"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"sudo apt install build-essential libpcre3 libpcre3-dev libssl-dev nginx-full libnginx-mod-rtmp ffmpeg\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:z},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Configure RTMP by editing the NGINX configuration file"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:al}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:x},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Paste this RTMP configuration into the NGINX configuration file and update it with your desired forwarding destinations. You can add a \"push\" line for each service you would like to forward the stream to. Note, Facebook Gaming streams need some extra configuration to work "},{type:b,tag:e,props:{href:am},children:[{type:a,value:"which I’ll address later"}]},{type:a,value:E}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,an]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"rtmp "},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:J}]},{type:a,value:"\n  server "},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:J}]},{type:a,value:"\n    listen "},{type:b,tag:d,props:{className:[g,"number"]},children:[{type:a,value:"1935"}]},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:ao}]},{type:a,value:"\n\n    application live "},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:J}]},{type:a,value:"\n      live on"},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:ao}]},{type:a,value:K},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# Twitch -- For for a list of ingest URLs see,"}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# https:\u002F\u002Fstream.twitch.tv\u002Fingests\u002F"}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"#rtmp:\u002F\u002Fatl.contribute.live-video.net\u002Fapp\u002F{YOUR-STREAM-KEY}"}]},{type:a,value:K},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# YouTube"}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"#push rtmp:\u002F\u002Fa.rtmp.youtube.com\u002Flive2\u002F{YOUR-STREAM-KEY}"}]},{type:a,value:K},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# Facebook -- Stunnel must be configured for this to work! I also"}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# recommend using a persistent stream key if you're setting this up so"}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"# you don't need to update the server configuration with every stream."}]},{type:a,value:D},{type:b,tag:d,props:{className:[g,y]},children:[{type:a,value:"#push rtmp:\u002F\u002F127.0.0.1:19350\u002Frtmp\u002F{YOUR-STREAM-KEY}"}]},{type:a,value:"\n    "},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:L}]},{type:a,value:ai},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,A]},children:[{type:a,value:L}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:ap},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Startup your server! You’ll need to run this command any time you make changes to the configuration file for them to get picked up."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,an]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"systemctl restart nginx.service "},{type:b,tag:d,props:{className:[g,"operator"]},children:[{type:a,value:"&&"}]},{type:a,value:" systemctl status nginx.service\n"}]}]}]},{type:a,value:c},{type:b,tag:B,props:{id:aa},children:[{type:b,tag:e,props:{href:"#stream",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Now all you need to do is stream to your new RTMP server and it will handle the rest. Just grab the IP address of your Linode instance and put it into OBS under Settings \u003E Stream"}]},{type:a,value:c},{type:b,tag:ak,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Service: Custom"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Server: rtmp:\u002F\u002F{{YOUR-LINODE-IP}}\u002Flive"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Stream Key: Makeup anything you want. Just don't share it with anyone.\n"},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"I recommend leaving all \"push\" lines commented out at first so you can test your server before going live. After starting the server and going live in your streaming software you can open a network stream (File \u003E Open Network) in VLC and enter the stream URL (Ex. http:\u002F\u002F{your-linode-server-ip}\u002Flive\u002F{YOUR-STREM-KEY}). If everything is working you should see your stream in VLC!"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{id:ac},children:[{type:b,tag:e,props:{href:am,ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"That should be all you need to get started. However, there are a couple of extra things you may need to know depending on where you stream. Facebook gaming requires that streams be sent using rtmps which isn’t supported by default in NGINX. Because of this, you’ll need to do some extra steps to get things working with Facebook."}]},{type:a,value:c},{type:b,tag:B,props:{id:ae},children:[{type:b,tag:e,props:{href:"#add-support-for-rtmps-with-stunnel",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Install "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.stunnel.org\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"stunnel"}]},{type:a,value:". This service will be used to accept an rtmp stream and forward it to an rtmps destination."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"sudo apt-get install stunnel4\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:z},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Create an stunnel configuration for forwarding to Facebook"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"vim \u002Fetc\u002Fstunnel\u002Fconf.d\u002Ffb.conf\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:x},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Paste in the following configuration"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"[fb-live]\nclient = yes\naccept = 127.0.0.1:19350\nconnect = live-api-s.facebook.com:443\nverifyChain = no\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:ap},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Update the stunnel configuration"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"vim \u002Fetc\u002Fdefault\u002Fstunnel4\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:5},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Enable the stunnel service and include the new Facebook configuration file"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"ENABLE=1\nFILES=\"\u002Fetc\u002Fstunnel\u002F*.conf\"\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:6},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Update the RTMP configuration"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:al}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:7},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Add a new \"push\" line to forward to stunnel. When the stream comes into your Linode server, NGINX will forward it to your stunnel service over rtmp which will then send it to Facebook over rtmps."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"push rtmp:\u002F\u002F127.0.0.1:19350\u002Frtmp\u002F{YOUR-STREAM-KEY}\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{start:8},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Restart nginx and stunnel so your changes take effect. The status commands aren't required but will let you know if the service ran into any issues starting up."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,w]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"systemctl restart stunnel4 && systemctl restart nginx.service && systemctl status stunnel4 && systemctl status nginx.service\n"}]}]}]},{type:a,value:c},{type:b,tag:C,props:{id:ag},children:[{type:b,tag:e,props:{href:"#what-about-transcoding",ariaHidden:h,tabIndex:i},children:[{type:b,tag:d,props:{className:[j,k]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"You can also do transcoding with this solution. You’ll just need to install ffmpeg and use the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Farut\u002Fnginx-rtmp-module\u002Fwiki\u002FDirectives#exec_push",rel:[s,t,u],target:v},children:[{type:a,value:"exec_push directive"}]},{type:a,value:" instead of push. However, this will increase the CPU load on the server so you may need to increase the size of the server to get it working. You can find some examples of transcoding on the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Farut\u002Fnginx-rtmp-module",rel:[s,t,u],target:v},children:[{type:a,value:"nginx-rtmp-module GitHub page"}]},{type:a,value:" if you’re interested."}]}]},dir:"\u002Fblog-posts",path:"\u002Fblog-posts\u002Fhow-to-multistream",extension:".md",updatedAt:"2023-06-03T02:52:08.602Z",readingTime:{text:"8 min read",minutes:7.165,time:429900,words:1433}}}],fetch:{},mutations:void 0}}("text","element","\n","span","a","li","token","true",-1,"icon","icon-link","ol","p","div","nuxt-content-highlight","pre","line-numbers","code","nofollow","noopener","noreferrer","_blank","language-text",3,"comment",2,"punctuation","h3","h2","\n      ",".","The easiest option","The free option","The DIY option","strong","{","\n\n      ","}","\u002Fimg\u002Fhow-to-multistream_thumb.png","first-what-is-multistreaming","First, what is multistreaming?","the-easiest-option","send-your-stream-to-another-web-service-that-will-duplicate-it","Send your stream to another web service that will duplicate it","the-free-option","have-your-pc-duplicate-the-stream-locally","Have your PC duplicate the stream locally","the-diy-option","build-your-own-web-server-that-will-duplicate-it","Build your own web server that will duplicate it","create-a-linode-server","Create a Linode server","setup-the-stream-forwarding-service-nginx","Setup the stream forwarding service (NGINX)","stream","Stream!","how-to-forward-to-facebook-gaming","How to forward to Facebook Gaming","add-support-for-rtmps-with-stunnel","Add support for rtmps with stunnel","what-about-transcoding","What about transcoding?","\n  ","#the-diy-option","ul","vim \u002Fetc\u002Fnginx\u002Fnginx.conf\n","#how-to-forward-to-facebook-gaming","language-shell",";",4)));