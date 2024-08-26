// Toolbar.js
import React, { useState } from 'react';
import InvitationService from './services/invitation.service';

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

  const handleCopyInvitationLink = () => {
    navigator.clipboard.writeText(invitationLink);
  };

  return (
    <div className="toolbar">
      <h2>Toolbar</h2>
      <button onClick={handleSendInvitation}>Send Invitation</button>
      {invitationLink && (
        <div>
          <input type="text" value={invitationLink} readOnly />
          <button onClick={handleCopyInvitationLink}>Copy</button>
        </div>
      )}
      {invitationError && (
        <div style={{ color: 'red' }}>{invitationError}</div>
      )}
    </div>
  );
}

export default Toolbar;