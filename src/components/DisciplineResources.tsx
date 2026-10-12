import type {RaceEvent} from "@/data/events";
import {resourcesForEvent} from "@/data/discipline-resources";
import ExternalLink from "./ExternalLink";
export default function DisciplineResources({event}:{event:RaceEvent}){const resources=resourcesForEvent(event);if(!resources.length)return null;return <aside className="discipline-resources" aria-label="Relevant paddlesports resources">{resources.map(resource=><article key={resource.id}><p>{resource.categoryLabel}</p><div><h2>{resource.brand}</h2><span>{resource.description}</span></div><ExternalLink linkId={resource.id} source="discipline-resource" eventSlug={event.slug}>Explore Esquif</ExternalLink></article>)}</aside>}
