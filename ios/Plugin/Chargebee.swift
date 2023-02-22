import Foundation

@objc public class Chargebee: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
