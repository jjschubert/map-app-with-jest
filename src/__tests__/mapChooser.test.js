import mapChooser from '../mapChooser';

describe("mapChooser", function(){
    it("returns an image based on input given to it", function(){
        let expected = "MPLS.jpg";
        let actual = mapChooser("MPLS");
        expect(actual).toEqual(expected);
    });
    it("returns a default image when no input is given", function() {
        let expected = "none.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    })
});