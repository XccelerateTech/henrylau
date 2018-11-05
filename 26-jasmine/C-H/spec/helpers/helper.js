beforeEach(function () {
    jasmine.addMatchers({
        toBeInTheSameAlbumAs: function () {
            return {
                compare: function (topContender, challenger) {
                    return {
                        pass: topContender.album === challenger.album
                    }
                }
            };
        }
    });
});