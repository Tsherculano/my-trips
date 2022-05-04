import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export default function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eos illo
          ab deserunt impedit incidunt, dolores cum quae rerum similique quod
          officiis non dicta quisquam cumque minima dolorem ipsum harum.
        </p>
      </S.Body>
    </S.Content>
  );
}
