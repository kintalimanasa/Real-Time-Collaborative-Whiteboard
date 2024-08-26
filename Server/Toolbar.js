// Toolbar.js
import React, { useState } from 'react';
import InvitationService from './services/InvitationService';

function Toolbar({ sessionId, username }) {
  const [invitationLink, setInvitationLink] = useState('');
  const [invitationError, setInvitationError] = useState(null);

  const handleSendInvitation = () => {
    const invitationService = new InvitationService();
    invitationService.generateInvitationLink(sessionId, username)
      .then((response) => {
        setInvitationLink(response.invitationLink);
      })
      .catch((error) => {
        setInvitationError(error.message);
      });
  };

  // ...
}