import * as C from './styles';
import { skillsData } from './skills';

export const Skills = () => {
  return (
    <C.Container id="skills">
      <h2>Minhas Habilidades</h2>
      <C.Card>
        {skillsData.map(({ title, subtitle, color, description, image, knowledge }) => (
          <C.CardItem key={title}>
            <section>
              <div className="title">
                <div>
                  <p style={{ color: color }}>{title}</p>
                  <span style={{ color: color }}>{subtitle}</span>
                </div>
                <img src={image.sourceImg} alt={image.alt} />
              </div>
              <p>{description}</p>
              <C.Knowledge>
                <span>Conhecimentos:</span>
                <ul>
                  {knowledge.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </C.Knowledge>
            </section>
          </C.CardItem>
        ))}
      </C.Card>
    </C.Container>
  );
};
