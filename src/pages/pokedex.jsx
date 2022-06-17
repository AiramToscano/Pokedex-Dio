import React, {useContext} from 'react';
import PokemonContext from '../Context/PokedexContext'


function Pokedex () {
    const { Provider } = useContext(PokemonContext)
    const { filtername, namepokemon } = Provider;
    const haddleButtomSearch = () => {
        console.log(namepokemon);
    }
    const haddleButtomClean = () => {
        filtername('');
    }
    return (
        <div id="pokedex">
        <div id="left">
          <div id="logo"></div>
          <div id="bg_curve1_left"></div>
          <div id="bg_curve2_left"></div>
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"> </div>
            </div>
            <div id="miniButtonGlass1"></div>
            <div id="miniButtonGlass2"></div>
            <div id="miniButtonGlass3"></div>
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"></div>
              <div id="junction2"></div>
            </div>
          </div>
          <div id="screen">
            <div id="topPicture">
              <div id="buttontopPicture1"></div>
              <div id="buttontopPicture2"></div>
            </div>
            <div id="picture">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif" alt="psykokwak" height="170" />
            </div>
            <div id="buttonbottomPicture"></div>
            <div id="speakers">
              <div class="sp"></div>
              <div class="sp"></div>
              <div class="sp"></div>
              <div class="sp"></div>
            </div>
          </div>
          <div id="bigbluebutton"></div>
          <div id="barbutton1">
          </div>
          <div id="barbutton2"></div>
          <div id="cross">
            <div id="leftcross">
              <div id="leftT"></div>
            </div>
            <div id="topcross">
              <div id="upT"></div>
            </div>
            <div id="rightcross">
              <div id="rightT"></div>
            </div>
            <div id="midcross">
              <div id="midCircle"></div>
            </div>
            <div id="botcross">
              <div id="downT"></div>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="stats">
            <strong>Name:</strong> Psyduck<br/>
            <strong>Type:</strong> Water<br/>
            <strong>Height:</strong> 2'072''<br/>
            <strong>Weight:</strong> 43.2 lbs.<br/><br/>
            <strong>The duck Pokemon</strong><br/>
            Uses mysterious powers to perform various attacks.
          </div>
          <div id="blueButtons2">
          <input
            onChange={(e) => filtername(e.target.value)}
            name="namepokemon"
            id="namefilter"
            value={ namepokemon }
          />
          </div>
          <div id="miniButtonGlass4"></div>
          <div id="miniButtonGlass5"></div>
          <div id="barbutton3"></div>
          <div id="barbutton4"></div>
          <div id="yellowBox1">
              <button id="buttom1" onClick = {haddleButtomSearch}>Pesquisar</button>
          </div>
          <div id="yellowBox2">
              <button id="buttom2" onClick={haddleButtomClean}>Limpar</button>
          </div>
          <div id="bg_curve1_right"></div>
          <div id="bg_curve2_right"></div>
          <div id="curve1_right"></div>
          <div id="curve2_right"></div>
        </div>
      </div>
    )
}

export default Pokedex;