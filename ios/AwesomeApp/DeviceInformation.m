//
//  DeviceInformation.m
//  AwesomeApp
//
//  Created by p_takanawa.tomonori on 2020/03/24.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "DeviceInformation.h"
#import <UIKit/UIKit.h>

@implementation DeviceInformation
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getInfo:(NSString*)tag callback:(RCTResponseSenderBlock)callback) {
  NSString *version = [UIDevice currentDevice].systemVersion;

  callback(@[@"iOSのバージョン...", version, tag]);
}

@end
