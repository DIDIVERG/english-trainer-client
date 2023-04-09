

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css';
import {DictionaryPage} from './pages/DictionaryPage'
import {TrainersPage} from './pages/TrainersPage'
import {VideosPage} from './pages/VideosPage'
import {Header} from './components/Header'
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container-wrapper">
        <Sidebar></Sidebar>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, assumenda blanditiis consequatur
                corporis dolor expedita laudantium molestias nulla omnis quibusdam quis quisquam quo sed sequi sint
                suscipit velit vero voluptates. Aut cumque nostrum placeat reiciendis saepe? Ad aut beatae, distinctio
                fugiat maiores non odit perferendis quam quibusdam quisquam repudiandae similique unde, veniam. Ab
                accusamus alias asperiores corporis doloremque dolorum eligendi, ex in laudantium, molestiae natus
                pariatur perspiciatis quae quasi repellendus repudiandae tempore temporibus? Accusamus blanditiis,
                cumque! Alias amet architecto culpa cumque dolore doloremque doloribus ea eligendi eum facilis fugit
                impedit ipsam magni minima molestiae natus, nemo nobis nulla numquam omnis praesentium quaerat quam quas
                quasi qui quia quos ratione, recusandae rem, repudiandae sapiente temporibus voluptate voluptates?
                Aspernatur atque commodi cum cumque deleniti ea eligendi enim et exercitationem fuga, illo iusto nisi,
                non numquam omnis pariatur perferendis provident quas, quasi quis quo reprehenderit repudiandae sequi
                sint suscipit tempore tenetur vel veniam veritatis vitae. Ad dignissimos eum inventore, magni nostrum
                praesentium vitae? A ab alias amet architecto beatae dignissimos, doloremque error eum fugit harum ipsum
                iste iusto labore laborum maxime molestiae nemo neque nesciunt nihil optio pariatur provident quis
                quisquam quo recusandae sed sint soluta sunt tempora voluptates. Consectetur dignissimos mollitia
                obcaecati quidem saepe! Cum, illum recusandae. Cum hic ipsum maiores minima molestiae necessitatibus
                quisquam sequi voluptatem! Ad adipisci aliquid aperiam, at consequuntur cum deserunt dolorem eligendi in
                ipsum, itaque laboriosam nam nisi pariatur quae quos, rem sed suscipit veritatis vero? A aspernatur,
                atque blanditiis consectetur dolorem doloremque earum eius eligendi est exercitationem inventore ipsam
                iusto magni maxime nam necessitatibus nostrum numquam officiis optio quam qui sapiente totam ullam vel
                veritatis. Ab alias consequuntur cumque eligendi id ipsum nisi quisquam saepe soluta voluptatibus?
                Adipisci consectetur dicta dignissimos qui reprehenderit! Alias consequatur delectus deleniti dolore
                ducimus est eveniet ipsa maxime minus necessitatibus neque nesciunt nostrum numquam, perferendis
                perspiciatis placeat porro praesentium quisquam rerum sint tempora temporibus velit. Adipisci aliquid,
                corporis distinctio, ducimus ea eaque est et eum exercitationem expedita fugit, illum impedit ipsam
                labore minus mollitia natus numquam odio quae quas quibusdam quis quisquam soluta veritatis vero. Alias
                atque dolore ex fuga illo impedit magni, quam soluta! Explicabo iure laboriosam laudantium molestiae
                optio quasi, sequi. Accusamus accusantium alias amet deleniti dolores earum eligendi facere facilis illo
                laborum, officiis pariatur quaerat repellendus, repudiandae sapiente sequi voluptatum! A, eveniet omnis.
                Consequuntur, tempora unde. Accusantium alias amet distinctio eius exercitationem facilis ipsa
                laboriosam rerum velit veritatis. Ab animi aperiam autem cumque deleniti dolores earum, eum illo ipsum
                laborum molestiae mollitia necessitatibus odit porro provident quidem, quo reiciendis saepe soluta vel
                veritatis voluptates voluptatum. Accusantium animi at aut blanditiis eaque ex expedita fugit, hic
                inventore iste, iusto labore laudantium magnam maxime molestias neque nesciunt, officia perferendis
                provident quae quod quos recusandae reiciendis sint tempora veniam vero voluptate? Accusantium aut,
                commodi deserunt exercitationem id minus necessitatibus nisi quae quas reprehenderit. Aliquid at commodi
                cupiditate deleniti deserunt doloremque ea eveniet fuga id, inventore laboriosam, molestias nemo
                nesciunt nostrum nulla pariatur quae quasi quidem quisquam ullam veniam vitae voluptatem voluptates!
                Aliquid animi cum, debitis dolorem eaque earum facere ipsam itaque libero maiores minima molestias nam
                nemo nihil optio pariatur porro quas quisquam quos ratione reprehenderit sed sit tenetur ut voluptate.
                Ad aliquam animi aut eaque, exercitationem expedita facere iure perspiciatis sit! Assumenda beatae,
                consectetur, distinctio doloribus eligendi enim facere illo ipsa ipsum modi obcaecati odit provident
                quasi repellat sed voluptatibus voluptatum. Dignissimos doloremque, dolores eveniet facere nulla, odit
                placeat praesentium quidem quisquam reiciendis sed tempora temporibus veritatis. Ab accusantium aliquam
                aspernatur, cupiditate distinctio dolor et explicabo fugiat hic itaque, minima mollitia nihil officiis
                perferendis quia quo sed sint soluta totam veniam! Accusantium alias consequuntur delectus dignissimos
                dolore, eaque eius eligendi eos error exercitationem explicabo hic in laboriosam laborum nemo odio
                placeat quae ullam voluptate voluptates? Corporis et ex excepturi magnam vel. Ab asperiores aspernatur
                atque cumque facere iste iure perferendis quisquam vitae voluptas! Adipisci architecto asperiores,
                consequatur cum delectus deleniti esse ex exercitationem facilis impedit ipsam itaque iure labore magni
                perferendis, porro quae quam quibusdam recusandae reiciendis repellat repellendus sed similique tempore
                totam unde velit veritatis. Autem commodi esse ex non odio omnis possimus quidem. Ad adipisci aliquam
                architecto at corporis culpa dolorem doloribus eum excepturi fuga inventore modi, non qui repellat rerum
                sapiente sed ut, veritatis. Ad ducimus modi sequi sit sunt! Adipisci aliquam architecto atque blanditiis
                dolor doloremque fugit ipsum laudantium magnam magni minus molestiae mollitia, nemo neque officiis
                praesentium quasi quos vitae? Aliquid consequuntur eligendi enim magnam quam. Adipisci, aliquam aperiam
                deleniti, deserunt distinctio excepturi harum impedit iure labore odio quis ullam ut voluptatibus. Alias
                dicta ducimus eius, enim, eveniet exercitationem ipsa laboriosam pariatur reprehenderit temporibus vero
                voluptatibus. Corporis deleniti dolorem error, esse facere harum laborum nam nulla provident, quidem quo
                sed tenetur totam. Corporis ducimus earum eligendi exercitationem, hic iure labore laboriosam magni
                officia praesentium qui reprehenderit sint veritatis? Ad aliquid consequatur culpa distinctio dolor
                dolores enim eum expedita iste mollitia non praesentium quam quidem quo, quos rem reprehenderit soluta
                ullam vero voluptate? Adipisci alias amet asperiores assumenda at blanditiis commodi culpa cum debitis
                delectus dolorem dolores doloribus, eius error esse eveniet facere fugiat inventore magni molestiae
                natus nisi nobis numquam officia optio pariatur perferendis placeat quos reiciendis repellendus sed
                tempore velit voluptates! Ab alias aliquam architecto corporis, eaque, eligendi esse est eveniet
                excepturi expedita in incidunt ipsum iste molestiae natus officiis provident quam quasi quod quos
                ratione, reiciendis sapiente sit unde veniam. Ad adipisci aperiam autem debitis delectus dicta ducimus
                explicabo in, maiores necessitatibus nihil optio quidem sed sit vel? Consectetur corporis dicta dolor ea
                eligendi incidunt ipsa iure iusto, labore laudantium nobis nostrum odit officia, optio placeat quas quo
                repudiandae ullam ut voluptas? Cum ea earum magni odit rerum sint sunt suscipit tempore velit voluptas.
                Ad alias aliquid asperiores aut blanditiis consequatur deleniti distinctio dolorem et molestiae, neque
                odio quam repudiandae rerum suscipit tenetur totam ullam unde ut voluptas! Amet animi atque consequuntur
                eligendi, id labore modi, molestiae mollitia nemo odio quae quibusdam vel vitae. Accusantium ad
                architecto facere magni quia quis, ratione tempora.</p>
          <Routes>
      <Route path="/main"> </Route>
      <Route path="/dictionary" element={<DictionaryPage/>}> </Route>
      <Route path="/trainers" element={<TrainersPage/>}> </Route>
      <Route path="/videos" element={<VideosPage/>}> </Route>
    </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
