const Hero = require('./classes').Hero;
const Evil = require('./classes').Evil;
const duel = require('./classes').duel;

describe('C how spies dose', ()=>{
    var AllMight;
    var AllForOne;
    
    beforeEach(()=>{
        AllMight = new Hero('AllMight', 8000, 100);
        AllForOne = new Evil('AllForOne', 5000, 100);

        // for settimeout usage
        jasmine.clock().install();

        spyOn(AllMight, 'attack')
        spyOn(AllForOne, 'attack')
    });
    afterEach(()=>{
        // for settimeout usage
        jasmine.clock().uninstall();
    });

    it('track duel function', ()=>{
        duel(AllMight, AllForOne);
        expect(AllMight.attack).toHaveBeenCalled();
        expect(AllMight.attack).toHaveBeenCalledTimes(50);
        expect(AllMight.attack).toHaveBeenCalledWith(AllForOne);
        
        expect(AllForOne.attack).toHaveBeenCalled();
        expect(AllForOne.attack).toHaveBeenCalledTimes(50);
        expect(AllForOne.attack).toHaveBeenCalledWith(AllMight);
    })

    it('Evil reborn', ()=>{
        duel(AllMight, AllForOne);
        jasmine.clock().tick(5000);
        expect(AllForOne.health).toEqual(800);
        expect(AllForOne.damage).toEqual(690)
    })
})