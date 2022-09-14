import { useRef, useEffect } from 'react';
import TablutGame from './TablutGame';

const Tablut = () => {
    const ref = useRef();

    useEffect(() => {
        const game = new TablutGame(ref.current);
        return () => game.clear();
    }, []);

    return (
        <div className="tablut-wrapper" ref={ref} />
    );
};

Tablut.title = 'FreeTablut - projekt';

export default Tablut;


console.log("Plik js podpięty.");