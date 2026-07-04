import { personasIntro, personas, momentosIntimos } from '../data/personas';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import PersonaCard from '../components/ui/PersonaCard';
import Reveal from '../components/ui/Reveal';
import Accordion from '../components/ui/Accordion';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'personas', label: 'Buyer personas' },
  { id: 'momentos', label: 'Momentos íntimos' },
];

export default function BuyerPersonas() {
  return (
    <>
      <PageHero
        index="06"
        kicker="Buyer personas y segmentos"
        title="Segmentar por relación con las piezas, no por demografía."
        intro={personasIntro}
        source="Fuente: Plan Marketing 360 §7"
      />
      <SectionNav items={SECTIONS} />

      <Section id="personas" tone="ivory">
        <SectionHeader
          kicker="Seis segmentos"
          title="Tres personas principales, tres secundarias."
          intro="Cada persona conserva sus cinco dimensiones del documento: quién es, su aspiración o tensión, qué necesita escuchar y qué le hace comprar."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {personas.map((persona, i) => (
            <PersonaCard key={persona.id} persona={persona} index={i} />
          ))}
        </div>
      </Section>

      <Section id="momentos" tone="parchment">
        <SectionHeader
          kicker="Momentos íntimos de conexión"
          title="Catorce momentos donde la marca entra en la vida real."
          intro="Cada momento define el deseo o tensión, el mensaje exacto, el contenido y canal, y su conexión con el ecommerce (§7.2)."
        />
        <Reveal>
          <Accordion
            size="md"
            items={momentosIntimos.map((momento, i) => ({
              id: `momento-${i}`,
              meta: String(i + 1).padStart(2, '0'),
              title: momento.momento,
              content: (
                <dl className="grid gap-4 md:grid-cols-2">
                  <div>
                    <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                      Deseo o tensión
                    </dt>
                    <dd className="mt-1 text-[0.92rem] leading-relaxed text-carbon/85">{momento.deseoTension}</dd>
                  </div>
                  <div>
                    <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                      Contenido / canal
                    </dt>
                    <dd className="mt-1 text-[0.92rem] leading-relaxed text-carbon/85">{momento.contenidoCanal}</dd>
                  </div>
                  <div className="rounded-sm border-l-2 border-camel bg-sand/25 px-4 py-3">
                    <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-camel uppercase">Mensaje</dt>
                    <dd className="mt-1 font-display text-[1.02rem] leading-snug text-chocolate italic">{momento.mensaje}</dd>
                  </div>
                  <div className="rounded-sm border-l-2 border-moss bg-moss/10 px-4 py-3">
                    <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-moss uppercase">
                      Conexión ecommerce
                    </dt>
                    <dd className="mt-1 text-[0.92rem] leading-relaxed text-carbon/85">{momento.conexionEcommerce}</dd>
                  </div>
                </dl>
              ),
            }))}
          />
        </Reveal>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="Los mensajes y canales que activan cada momento."
        primary={{ label: 'Ver la estrategia 360', to: '/marketing-360' }}
        secondary={{ label: 'Ver el ecommerce', to: '/ecommerce' }}
      />
    </>
  );
}
