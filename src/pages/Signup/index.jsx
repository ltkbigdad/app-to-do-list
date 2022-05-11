import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AnimationContainer, Background, Container, Content } from "./styles";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

function Signup() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="nome" placeholder="Seu nome" />
            <Input icon={FiMail} label="Email" placeholder="Seu melhor email" />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/link">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
