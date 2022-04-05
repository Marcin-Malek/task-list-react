import Header from "../../../common/Header"
import Section from "../../../common/Section"

const AuthorPage = () => (
    <>
        <Header title="O Autorze" />
        <Section
            title="Marcin Małek"
            content={
                <>
                    <p>
                        Nazywam się Marcin Małek, mam 22 lata i jestem absolwentem
                        <i>Uniwersytetu im. Adama Mickiewicza w Poznaniu</i>.
                        Ukończyłem studia na kierunku <i>Akustyka</i>.
                        Do końca 2021 roku pracowałem jako specjalista ds. Ochrony przed hałasem.
                        W pracy zajmowałem się zagadnieniami takimi jak <b>akustyka budowlana</b> i <b>hałas w środowisku</b>.
                    </p>
                    <p>
                        Od Początku 2022 roku jestem mocno zaangażowanym uczestnikiem kursu <i>Frontend developer od podstaw</i>,
                        który organizowany jest przez zespół YouCode.
                        Mam nadzieję, że moja determinacja w połączeniu z ciężką pracą pozwoli mi w przyszłości na uzyskanie mojej wymarzonej pracy jako programista. 😀
                    </p>
                </>
            }
        />
    </>
);

export default AuthorPage;