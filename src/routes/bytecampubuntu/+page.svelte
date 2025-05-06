<script lang="ts">
	export let downloadLink = 'iso-host.fly.dev/ubuntu-custom.iso';
	export let changelog = [
		'Updated to Ubuntu 24 LTS.',
		'Extra apps are now hidden',
		'Install process is automated.',
		'Custom splash screen.',
	];

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
	}

	const commands = {
		listDrives: 'lsblk',
		unmount: `sudo umount /dev/sda1
sudo umount /dev/sda2
sudo umount /dev/sda3`,
		format: 'sudo mkfs.vfat -I -F 32 /dev/sda',
		writeISO: 'sudo dd if=/home/student/try3/ubuntu-24.10.0-custom-desktop-amd64.iso of=/dev/sda bs=4M status=progress oflag=sync'
	};
</script>

<svelte:head>
	<title>Byte Camp Ubuntu - Release 1.0</title>
</svelte:head>

<div class="min-h-screen bg-[var(--bg-color)] p-6 md:p-12">
	<div class="max-w-4xl mx-auto space-y-8">
		<h1 class="text-4xl font-bold text-[var(--primary-text)]">Byte Camp Ubuntu</h1>
		<p class="text-[var(--secondary-text)] text-lg">
			Welcome!
		</p>

		<section class="space-y-4">
			<h2 class="text-2xl font-semibold text-[var(--primary-text)]">Download</h2>
			<a
				class="inline-block px-6 py-3 bg-[var(--accent-color)] dark:text-white rounded-lg hover:opacity-90 transition-opacity"
				href={downloadLink}
				download
			>
				Download Byte Camp Ubuntu ISO
			</a>
		</section>

		<section class="space-y-4">
			<h2 class="text-2xl font-semibold text-[var(--primary-text)]">Changelog</h2>
			<ul class="list-disc list-inside space-y-2 text-[var(--secondary-text)]">
				{#each changelog as change}
					<li>{change}</li>
				{/each}
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="text-2xl font-semibold text-[var(--primary-text)]">Installation Instructions</h2>
			<p class="text-[var(--secondary-text)]">Follow the steps below to create a bootable USB drive:</p>
			<p class="text-[var(--secondary-text)]">A high quality USB 3.2 Gen 1 (formerly USB 3.0) drive will make the whole process significantly faster and smoother </p>
			
			<ol class="space-y-6 list-decimal list-inside">
				<li class="text-[var(--secondary-text)]">
					<span>List all connected drives:</span>
					<div class="relative mt-2 group">
						<pre class="bg-[var(--code-bg)] p-4 rounded-lg overflow-x-auto"><code>{commands.listDrives}</code></pre>
						<button
							class="absolute top-2 right-2 px-3 py-1 text-sm bg-[var(--accent-color)] text-slate-500 rounded opacity-0 group-hover:opacity-100 transition-opacity"
							on:click={() => copyToClipboard(commands.listDrives)}
						>
							Copy
						</button>
					</div>
				</li>

				<li class="text-[var(--secondary-text)]">
					<span>Unmount all partitions of the target USB drive:</span>
					<div class="relative mt-2 group">
						<pre class="bg-[var(--code-bg)] p-4 rounded-lg overflow-x-auto"><code>{commands.unmount}</code></pre>
						<button
							class="absolute top-2 right-2 px-3 py-1 text-sm bg-[var(--accent-color)] text-slate-500 rounded opacity-0 group-hover:opacity-100 transition-opacity"
							on:click={() => copyToClipboard(commands.unmount)}
						>
							Copy
						</button>
					</div>
				</li>

				<li class="text-[var(--secondary-text)]">
					<span>Format the USB drive as FAT32:</span>
					<div class="relative mt-2 group">
						<pre class="bg-[var(--code-bg)] p-4 rounded-lg overflow-x-auto"><code>{commands.format}</code></pre>
						<button
							class="absolute top-2 right-2 px-3 py-1 text-sm bg-[var(--accent-color)] text-slate-500 rounded opacity-0 group-hover:opacity-100 transition-opacity"
							on:click={() => copyToClipboard(commands.format)}
						>
							Copy
						</button>
					</div>
				</li>

				<li class="text-[var(--secondary-text)]">
					<span>Write the ISO to the USB drive:</span>
					<div class="relative mt-2 group">
						<pre class="bg-[var(--code-bg)] p-4 rounded-lg overflow-x-auto"><code>{commands.writeISO}</code></pre>
						<button
							class="absolute top-2 right-2 px-3 py-1 text-sm bg-[var(--accent-color)] text-slate-500 rounded opacity-0 group-hover:opacity-100 transition-opacity"
							on:click={() => copyToClipboard(commands.writeISO)}
						>
							Copy
						</button>
					</div>
				</li>
			</ol>
		</section>
	</div>
</div>
