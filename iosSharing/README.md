#IOS Sharing
##inject following snippets into your app to share

```objective-c
 - (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    CGRect screenBounds = [[UIScreen mainScreen] bounds];

#if __has_feature(objc_arc)
    self.window = [[UIWindow alloc] initWithFrame:screenBounds];
#else
    self.window = [[[UIWindow alloc] initWithFrame:screenBounds] autorelease];
#endif
    self.window.autoresizesSubviews = YES;

#if __has_feature(objc_arc)
    self.viewController = [[MainViewController alloc] init];
#else
    self.viewController = [[[MainViewController alloc] init] autorelease];
#endif

    self.window.rootViewController = self.viewController;
    [self.window makeKeyAndVisible];

    if(self.contents != nil){
        [self.viewController.webView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat: @"window.stammdaten='%@'",[NSString stringWithUTF8String:[self.contents cStringUsingEncoding:NSUTF8StringEncoding]]]];
    }
    //NSLog(@"did contents %@",self.contents);

    return YES;
}

- (BOOL)application:(UIApplication*)application openURL:(NSURL*)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation
{

    if (!url) {
        return NO;
    }

    // all plugins will get the notification, and their handlers will be called
    [[NSNotificationCenter defaultCenter] postNotification:[NSNotification notificationWithName:CDVPluginHandleOpenURLNotification object:url]];
    self.contents = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:nil];
    if(self.contents != nil){
       [self.viewController.webView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat: @"window.stammdaten='%@'",[NSString stringWithUTF8String:[self.contents cStringUsingEncoding:NSUTF8StringEncoding]]]];
        //NSLog(@"import %@",self.contents);
    }


    return YES;
}
```
