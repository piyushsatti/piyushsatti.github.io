// Posts marked `draft: true` are skipped by every blog query.
export const isPublished = ({ data }: { data: { draft?: boolean } }) => !data.draft;
