import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlaylists } from '../../redux/store/modules/playlists/actions';

import playlistsRepository from '../../repositories/playlists';
import { BannerFormContainer, ContentAreaContainer, Form } from './styles';

export default function BannerForm() {
  const dispatch = useDispatch();
  const [idCanal, setIdCanal] = useState({});

  const handleFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const playlists = await playlistsRepository.getAllFromChannelId(idCanal);
      dispatch(addPlaylists(playlists));
    },
    [idCanal]
  );

  const handleInputChange = useCallback((event) => {
    setIdCanal(event.target.value);
  }, []);

  return (
    <BannerFormContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            Faça uma busca pelo id do canal, para ver as playlists salvas
          </ContentAreaContainer.Title>
          por exemplo, para o canal Dev Soutinho: UCo7EHzKF2zDFWszw7Dg4mPw
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <Form onSubmit={handleFormSubmit}>
            <label htmlFor="idCanal">Id do canal</label>
            <input
              type="text"
              name="idCanal"
              id="idCanal"
              onChange={handleInputChange}
            />
            <button type="submit">Buscar</button>
          </Form>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerFormContainer>
  );
}
