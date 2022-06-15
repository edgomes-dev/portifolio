import * as C from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('O campo nome é requerido'),
  email: yup.string().email('Insira um e-mail válido').required('O campo e-mail é requerido'),
  subject: yup.string().required('O campo assunto é requerido'),
  message: yup.string().required('O campo mensagem é requerido')
});

export const Contact = () => {
  const {
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <C.Container id="contact">
      <h3>Entre em contato</h3>
      <form action="https://formsubmit.co/edgomesgomes@outlook.com" method="post">
        <C.Field>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            {...register('name', { required: true })}
            placeholder="Seu nome"
          />
        </C.Field>
        <C.Field>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder="Seu E-mail"
          />
        </C.Field>
        <C.Field>
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            name="subject"
            {...register('subject', { required: true })}
            placeholder="O assunto"
          />
        </C.Field>
        <C.Field>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            {...register('message', { required: true })}
            id=""
            cols="30"
            rows="10"
            placeholder="Escreva sua mensagem"></textarea>
        </C.Field>
        <C.Error>
          <p>{errors.name?.message}</p>
          <p>{errors.email?.message}</p>
          <p>{errors.subject?.message}</p>
          <p>{errors.message?.message}</p>
        </C.Error>
        <C.Button>
          <input type="submit" className="btn" value="Mandar mensagem" />
        </C.Button>
      </form>
    </C.Container>
  );
};
