---
title: bluesky custom feed
description: creating a custom bluesky feed, from scratch
aliases: 
tags: 
date: 2024-12-03T04:02:35+00:00
---
this was pretty painful to get to work but heres what i did in the end:

you can clone the feed-generator example repo from here [GitHub - bluesky-social/feed-generator: ATProto Feed Generator Starter Kit](https://github.com/bluesky-social/feed-generator)

here is my edited version, which currently shows users with a custom (non .bsky.social) domain as their username. its probably a bit scuffed.
[GitHub - iamasink/feed-generator: ATProto Feed Generator Starter Kit modified](https://github.com/iamasink/feed-generator)

# how to :D
kinda tutorial but also idk what im doing, so basically just what i tried that worked:

first, make sure everything works locally, the app seems to cache the feed so you may need to create a new one (maybe with a different name?) if you mess up and it errors out.
example .env

```sh
# Whichever port you want to run this on 
FEEDGEN_PORT=3000

# Change this to use a different bind address
FEEDGEN_LISTENHOST="localhost"

# Set to something like db.sqlite to store persistently
FEEDGEN_SQLITE_LOCATION=":memory:"

# Don't change unless you're working in a different environment than the primary Bluesky network
FEEDGEN_SUBSCRIPTION_ENDPOINT="wss://bsky.network"

# Set this to the hostname that you intend to run the service at
FEEDGEN_HOSTNAME="testblueskyfeed.iamas.ink"
# change !

# Set this to the DID of the account you'll use to publish the feed
# You can find your accounts DID by going to
# https://bsky.social/xrpc/com.atproto.identity.resolveHandle?handle=${YOUR_HANDLE}
FEEDGEN_PUBLISHER_DID="did:plc:txdeqi6p3r4hdz4ppa7bj5zh"
# change !


# Only use this if you want a service did different from did:web
# FEEDGEN_SERVICE_DID="did:plc:txdeqi6p3r4hdz4ppa7bj5zh"

# Delay between reconnect attempts to the firehose subscription endpoint (in milliseconds)
FEEDGEN_SUBSCRIPTION_RECONNECT_DELAY=3000
```
change the *hostname* and *publisher_did* to your hostname where you host the feed and *profile did*
you must also change the feed name in the `algos\whatever.ts`. this is the shortname[^1], you must set it in the script later



you can visit the following url to check if your feed is being populated
```
http://localhost:3000/xrpc/app.bsky.feed.getFeedSkeleton?feed=at://did:plc:<your did*>/app.bsky.feed.generator/test
```
\* as specified in .env

once it's working locally, you need to make the feed available on https on the internet.
for example, I'm behind caddy and cloudflare.
in the caddyfile:
```Caddyfile
https://testblueskyfeed.iamas.ink {
	# email for tls
	email example@example.org
	reverse_proxy localhost:3000
}
```
ensure your firewalls allow port 3000 (or whatever you choose) to access it, then check your public domain/subdomain at a similar url to earlier:
(no port)
```
http://myfeed.example.org/xrpc/app.bsky.feed.getFeedSkeleton?feed=at://did:plc:<your profile did*>/app.bsky.feed.generator/test
```

once you are sure it is working, and can see posts being populated in the feed on your public url, create the feed on bluesky using the [publishFeedGen](https://github.com/bluesky-social/feed-generator/blob/main/scripts/publishFeedGen.ts) script.
notably, the short name / record name must be the same as in the `algos\*whatever*.ts` file.


# errors i got
> Hmm, the feed server appears to be misconfigured. Please let the feed owner know about this issue. 
> Message from server: invalid feed generator service details in did document:did:plc:txdeqi6p3r4hdz4ppa7bj5zh   

im pretty sure this error was because i tried using the FEEDGEN_SERVICE_DID and setting it to my account id?

> Hmm, the feed server appears to be misconfigured. Please let the feed owner know about this issue. 
> Message from server: invalid feed generator service   

probably same as last error?


> Hmm, some kind of issue occurred when contacting the feed server. Please let the feed owner know about this issue. 
> Message from server: Unsupported algorithm

 from having a different shortname for the published feed as to the shortname in the argos file
 
 or if while testing the manual url, you get this
` {"error":"UnsupportedAlgorithm","message":"Unsupported algorithm"}`
  its from having the wrong DID or feed url, basically any part past `feed=` being wrong causes this i think.

> Hmm, some kind of issue occurred when contacting the feed server. Please let the feed owner know about this issue. 
> Message from server: XRPCNotSupported

probably you pointed to the wrong domain, or are hosting the wrong thing on the port you chose.
happens to me if i run a nextjs dev server on port 3000 and visit the feed.

[^1]: shortname - i think this is also referred to as the *record name*, but i will just refer to it as shortname. its what shows up in the url if you click on the published feed on your profile, eg in `https://bsky.app/profile/iamas.ink/feed/test2`, its `test2`