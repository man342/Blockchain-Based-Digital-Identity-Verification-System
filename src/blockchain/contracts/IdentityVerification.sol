// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityVerification {
    struct Identity {
        string name;
        uint256 id;
        address owner;
    }

    mapping(uint256 => Identity) public identities;

    event IdentityAdded(uint256 id, string name, address owner);

    function addIdentity(uint256 _id, string memory _name) public {
        require(identities[_id].owner == address(0), "Identity already exists");

        identities[_id] = Identity({
            name: _name,
            id: _id,
            owner: msg.sender
        });

        emit IdentityAdded(_id, _name, msg.sender);
    }

    function verifyIdentity(uint256 _id) public view returns (string memory, address) {
        Identity memory identity = identities[_id];
        return (identity.name, identity.owner);
    }
}
