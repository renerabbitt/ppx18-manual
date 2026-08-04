(() => {
  const priorFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const response = await priorFetch(input, options);
    if (!String(input).includes("changelog-data-v4.json")) return response;
    const data = await response.json();
    const release = data.find(item => item.version === "PPX18 260729");
    if (release) {
      const plan = [
        "Fixed the Pro Plan concrete stem wall with furring wall type so the furring wall is assigned to the correct layer.",
        "Updated the Framing Overview layer set so wall framing display can be toggled correctly.",
        "Fixed terrain topography contours so major contours use 10-foot intervals, minor contours use 12-inch intervals, and negative terrain heights are not highlighted.",
        "Updated Room Label to use a global call instead of storing the label in the Library, reducing macro conflicts and improving performance.",
        "Updated the Pro Plan Transfer tool and the All Macro Replacement tool."
      ];
      release.changes["New Features"] = [...(release.changes["New Features"] || []), ...plan];
      release.groups["Plan Template"] = [...(release.groups["Plan Template"] || []), ...plan.slice(0, 4)];
      release.groups["Library"] = [...(release.groups["Library"] || []), plan[4]];
    }
    return new Response(JSON.stringify(data), {status: response.status, headers: {"Content-Type":"application/json"}});
  };
})();