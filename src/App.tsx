import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Rutas internas con code-splitting: solo la home viaja en el bundle inicial.
const Universo = lazy(() => import('./pages/Universo'));
const Producto = lazy(() => import('./pages/Producto'));
const IdentidadVisual = lazy(() => import('./pages/IdentidadVisual'));
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const BuyerPersonas = lazy(() => import('./pages/BuyerPersonas'));
const Marketing360 = lazy(() => import('./pages/Marketing360'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const KpisPresupuesto = lazy(() => import('./pages/KpisPresupuesto'));
const Riesgos = lazy(() => import('./pages/Riesgos'));
const ArchivoEstrategico = lazy(() => import('./pages/ArchivoEstrategico'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <p className="font-display text-lg tracking-[0.2em] text-taupe uppercase">Cargando…</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/universo"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Universo />
            </Suspense>
          }
        />
        <Route
          path="/producto"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Producto />
            </Suspense>
          }
        />
        <Route
          path="/identidad-visual"
          element={
            <Suspense fallback={<RouteFallback />}>
              <IdentidadVisual />
            </Suspense>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Ecommerce />
            </Suspense>
          }
        />
        <Route
          path="/buyer-personas"
          element={
            <Suspense fallback={<RouteFallback />}>
              <BuyerPersonas />
            </Suspense>
          }
        />
        <Route
          path="/marketing-360"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Marketing360 />
            </Suspense>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Suspense fallback={<RouteFallback />}>
              <RoadmapPage />
            </Suspense>
          }
        />
        <Route
          path="/kpis-presupuesto"
          element={
            <Suspense fallback={<RouteFallback />}>
              <KpisPresupuesto />
            </Suspense>
          }
        />
        <Route
          path="/riesgos"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Riesgos />
            </Suspense>
          }
        />
        <Route
          path="/archivo-estrategico"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ArchivoEstrategico />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
