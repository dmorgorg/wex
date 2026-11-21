<script>
	import WE from '#lib/components/WE.svelte'
	import SubsubsectionHeader from '#lib/components/SubsubsectionHeader.svelte'
</script>

<main>
	<div class="scope">
		<WE levels="00">A</WE>
		<WE levels="00">B</WE>
	</div>
	<div class="scope">
		<WE levels="10">C</WE>
		<WE levels="10">D</WE>
	</div>
	<div class="scope">
		<SubsubsectionHeader>First</SubsubsectionHeader>
		<WE levels="01">E</WE>
		<WE levels="01">F</WE>
		<SubsubsectionHeader>Second</SubsubsectionHeader>
		<WE levels="01">G</WE>
	</div>
	<div class="scope">
		<SubsubsectionHeader>First</SubsubsectionHeader>
		<WE levels="11">H</WE>
		<SubsubsectionHeader>Second</SubsubsectionHeader>
		<WE levels="11">I</WE>
	</div>
</main>

<style>
	.scope {
		counter-reset: section-counter 3 subsection-counter 4 subsubsection-counter 0 problem-counter 0;
	}
</style>
