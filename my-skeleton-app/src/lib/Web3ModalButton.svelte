<!-- src/lib/Web3ModalButton.svelte -->
<script lang="ts">
    import web3Modal from '../utils/web3Setup';
  
    async function connect() {
      const provider = await web3Modal.connect();
      // Your code to interact with the blockchain
    }
  </script>
  
  <button on:click={connect}>
    Connect Wallet
  </button>
  
  <!-- Add this to use Web3Modal's web components -->
  <w3m-button />
  