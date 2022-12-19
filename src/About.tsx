import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        infiniTermo é um remake do jogo {""}
        <a href="https://term.ooo/">
          <i>Termo</i>
        </a>{" "}
      </p>
      <p>
        Você tem {maxGuesses} tentativas para acertar uma palavra.
        <br />
        Depois de cada tentativa, você recebe "feedback" sobre o que acertou em cada.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={5}
        cluedLetters={[
          { clue: Clue.Absent, letter: "t" },
          { clue: Clue.Elsewhere, letter: "e" },
          { clue: Clue.Absent, letter: "r" },
          { clue: Clue.Absent, letter: "m" },
          { clue: Clue.Correct, letter: "o" },
        ]}
      />
      <p>
        <b>T</b>,<b>R</b> e <b>M</b> não estão na palavra que está tentando achar.
      </p>
      <p>
        <b className={"green-bg"}>O</b> está correto! A ultima letra é{" "}
        <b className={"green-bg"}>O</b>
        .<br />
        <strong>(Mas talvez tenha outro{" "}
        <b className={"green-bg"}>O</b> na palavra .)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>E</b> aparece <em>em outro local</em> na palavra
        correta
        <br />
        <strong>(Talvez mais que uma vez. 🤔)</strong>
      </p>
      <hr />
      <p>
        Vamos tentar outra palavra com{" "}
        <b className={"green-bg"}>O</b> no final e{" "}
        <b className={"yellow-bg"}>E</b> em outro local:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={5}
        cluedLetters={[
          { clue: Clue.Correct, letter: "v" },
          { clue: Clue.Correct, letter: "i" },
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "e" },
          { clue: Clue.Correct, letter: "o" },
        ]}
        annotation={"Acertei!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/lynn/hello-wordl/issues">here</a>, or tweet{" "}
        <a href="https://twitter.com/chordbug">@chordbug</a>.
      </p>
      <p>
        Esse jogo é baseado no Hello-Wordl, por chordbug,
        <br />
        compre um <a href="https://ko-fi.com/chordbug">café</a> para ajuda-lá!
      </p>
    </div>
  );
}
