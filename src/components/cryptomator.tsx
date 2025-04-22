// src/pages/Cryptomator.tsx
import React from "react";
import { Image } from "react-bootstrap";
import '../assets/styles/Project.scss';

function Cryptomator() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔐 Protecting Your Cloud Files with Cryptomator</h1>
      <p>
        Ever worried about the privacy of your files stored in the cloud? Services like Google Drive or Dropbox are super convenient, but they're not exactly Fort Knox when it comes to security. That's where <strong>Cryptomator</strong> comes in—a simple, free, and open-source tool that encrypts your files before they ever leave your device.
      </p>

      <h2>🧩 What Is Cryptomator?</h2>
      <p>
        Cryptomator creates a secure, virtual drive on your machine. Any file you move there gets encrypted instantly using strong AES-256 encryption. It’s like a digital vault—only you have the key.
      </p>
      <Image
        src="https://cryptomator.org/wp-content/uploads/2020/01/cryptomator-encryption-process.png"
        alt="How Cryptomator Encrypts Your Files"
        fluid
        style={{ marginBottom: "1rem" }}
      />
      <p>
        The best part? It works alongside your favorite cloud service. Dropbox, Google Drive, OneDrive—you name it. Cryptomator makes sure your files are encrypted *before* they’re uploaded, so nobody—not even your cloud provider—can peek at them.
      </p>

      <h2>⚙️ How Does It Work?</h2>
      <ol>
        <li><strong>Create a Vault:</strong> Choose where your encrypted folder (vault) will be stored.</li>
        <li><strong>Set a Password:</strong> This unlocks your vault. Make sure it’s strong!</li>
        <li><strong>Use the Vault:</strong> Drag and drop your files like it’s a normal folder. Cryptomator takes care of the encryption in real-time.</li>
        <li><strong>Sync:</strong> Your encrypted files are automatically uploaded to your cloud as usual.</li>
      </ol>
      <Image
        src="https://cryptomator.org/wp-content/uploads/2020/01/cryptomator-setup.png"
        alt="Setting Up Cryptomator Vault"
        fluid
        style={{ marginBottom: "1rem" }}
      />

      <h2>📱 What About Mobile?</h2>
      <p>
        Yup, Cryptomator’s got you covered. It offers mobile apps for iOS and Android, letting you access your encrypted vaults from anywhere. Your private files stay private—even on the go.
      </p>

      <h2>🛡️ Why Should You Use It?</h2>
      <ul>
        <li><strong>Privacy First:</strong> Your files are encrypted locally—nobody else gets access.</li>
        <li><strong>Zero Trust:</strong> Even if your cloud account gets compromised, your files stay unreadable.</li>
        <li><strong>Open Source:</strong> Fully transparent. No backdoors. Community-audited.</li>
        <li><strong>Works With Everything:</strong> Any cloud service that syncs folders will work.</li>
        <li><strong>Free to Use:</strong> Completely free on desktop, optional payment for mobile apps.</li>
      </ul>

      <h2>🎯 Who Is It For?</h2>
      <p>
        Cryptomator is for anyone who wants to take back control of their cloud data. Whether you're a student storing personal docs, a freelancer protecting client files, or just someone who values digital privacy—this tool is for you.
      </p>

      <h2>🚀 Getting Started</h2>
      <p>
        You can download Cryptomator from their official website:{" "}
        <a href="https://cryptomator.org" target="_blank" rel="noreferrer">
          cryptomator.org
        </a>. Installation is straightforward—just like installing any other app. Within minutes, you'll have your first encrypted vault ready.
      </p>

      <h2>💬 Final Thoughts</h2>
      <p>
        Cryptomator is like putting a lock on your digital life. It’s easy to use, trustworthy, and it helps you sleep better at night knowing your files are truly yours.
      </p>
    </div>
  );
}

export default Cryptomator;
