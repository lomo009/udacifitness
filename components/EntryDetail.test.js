const rewire = require("rewire")
const EntryDetail = rewire("./EntryDetail")
const mapStateToProps = EntryDetail.__get__("mapStateToProps")
const mapDispatchToProps = EntryDetail.__get__("mapDispatchToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps(["Abruzzo", "Alabama", "Alabama"], { navigation: { state: { params: "http://www.example.com/route/123?foo=bar" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps(["Alabama", "Florida", "Île-de-France"], { navigation: { state: { params: "https://api.telegram.org/bot" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps(["Abruzzo", "Île-de-France", "Abruzzo"], { navigation: { state: { params: "http://www.example.com/route/123?foo=bar" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps(["Abruzzo", "Alabama", "Florida"], { navigation: { state: { params: "https://api.telegram.org/bot" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps(["Île-de-France", "Abruzzo", "Alabama"], { navigation: { state: { params: "ponicode.com" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined, { navigation: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let object = [["ponicode.com", "www.google.com", "http://base.com"], ["ponicode.com", "https://", "https://croplands.org/app/a/confirm?t="], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            mapDispatchToProps("c466a48309794261b64a4f02cfcc3d64", { navigation: { state: { params: object }, goBack: () => "2021-07-29T23:03:48.812Z" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["http://base.com", "https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t="], ["https://croplands.org/app/a/confirm?t=", "ponicode.com", "https://"], ["ponicode.com", "https://api.telegram.org/", "https://api.telegram.org/"]]
        let callFunction = () => {
            mapDispatchToProps(9876, { navigation: { state: { params: object }, goBack: () => "2021-07-30T00:05:36.818Z" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.example.com/route/123?foo=bar", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://twitter.com/path?abc", "https://", "http://base.com"], ["https://croplands.org/app/a/reset?token=", "www.google.com", "http://base.com"]]
        let callFunction = () => {
            mapDispatchToProps(9876, { navigation: { state: { params: object }, goBack: () => "2021-07-29T23:03:48.812Z" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["http://www.example.com/route/123?foo=bar", "Www.GooGle.com", "https://api.telegram.org/bot"], ["https://api.telegram.org/bot", "https://api.telegram.org/bot", "https://twitter.com/path?abc"], ["http://base.com", "https://api.telegram.org/bot", "https://api.telegram.org/"]]
        let callFunction = () => {
            mapDispatchToProps("da7588892", { navigation: { state: { params: object }, goBack: () => "2021-07-29T17:54:41.653Z" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["https://", "ponicode.com", "https://api.telegram.org/bot"], ["https://api.telegram.org/", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc"], ["http://www.example.com/route/123?foo=bar", "https://api.telegram.org/", "https://api.telegram.org/"]]
        let callFunction = () => {
            mapDispatchToProps("da7588892", { navigation: { state: { params: object }, goBack: () => "2021-07-29T17:54:41.653Z" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined, { navigation: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
