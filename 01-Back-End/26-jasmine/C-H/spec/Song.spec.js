const Song = require('../Song')
const matcher = require('./helpers/helper')

describe('Song Detail Checking', ()=>{
    let song1 = new Song('name1', 'album1', 'author1');
    let song2 = new Song('name2', 'album2', 'author2');
    let song3 = new Song('name3', 'album3', 'author3');
    let song4 = new Song('name4', 'album1', 'author1')
    let repeat = new Song('name1', 'album1', 'author1');

    // Ex - D
    it('song1 detail', ()=>{
        expect(song1.getDescription()).toEqual('The name of this song is name1 and it is from the album album1. It is written by author1')
    })
    it('song2 detail', ()=>{
        expect(song2.getDescription()).toEqual('The name of this song is name2 and it is from the album album2. It is written by author2')
    })
    it('song3 detail', ()=>{
        expect(song3.getDescription()).toEqual('The name of this song is name3 and it is from the album album3. It is written by author3')
    })
    // EX - E
    it('check album', ()=>{
        expect(song1.isInSameAlbum(repeat)).toEqual(true);
    })
    it('check album', ()=>{
        expect(song1.isInSameAlbum(song2)).toEqual(false);
    })
    // EX - F
    it('check album', ()=>{
        expect(song1).toBeInTheSameAlbumAs(song4)
    })

    // EX - G
    it('check repeat', ()=>{
        // toBe ===
        // toEqual ==
        expect(song1).toEqual(repeat);
        // expect(song1).toBe(repeat);
        expect(song1).not.toBe(repeat);
    })
})