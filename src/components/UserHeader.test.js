const rewire = require("rewire")
const UserHeader = rewire("./UserHeader")
const mapStateToProps = UserHeader.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ users: { find: () => "Gail Hoppe" } }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ users: { find: () => "Ronald Keeling" } }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", userId: 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ users: { find: () => "Janet Homenick" } }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ users: { find: () => "Gail Hoppe" } }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ users: { find: () => "Ronald Keeling" } }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", userId: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
