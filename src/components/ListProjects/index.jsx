import './styles.scss'
import { useState } from 'react'
import { ModalProject } from '../ModalProject'
import { gsap } from 'gsap'
import { Project } from '../Project'

export const Projects = ({ showScroll, projects }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
  const sortedProjects = [...projects].sort((a, b) => a.gridPosition - b.gridPosition)


  function organizeProjects(sortedProjects) {
    const rows = []
    let currentRow = []
    let currentRowHeight = 0
    let maxHeight = 0

    sortedProjects.forEach((project, index) => {
      project.id = index
      const projectHeight = parseInt(project.height)

      if (currentRow.length === 0) {
        currentRow.push(project)
        currentRowHeight = 0
        maxHeight = projectHeight
      } else {
        if (
          projectHeight + currentRowHeight <= maxHeight ||
          (projectHeight + currentRowHeight <= maxHeight && currentRow.length === 1)
        ) {
          currentRow.push(project)
          currentRowHeight += projectHeight
        } else {
          if (projectHeight > maxHeight || projectHeight + currentRowHeight > maxHeight) {
            rows.push(currentRow)
            currentRow = [project]
            currentRowHeight = 0
            maxHeight = projectHeight
          }
        }
      }
    })

    if (currentRow.length > 0) {
      rows.push(currentRow)
    }

    return rows
  }

  let organizedProjects = organizeProjects(sortedProjects)


  const colums = organizedProjects.map((subarray) => subarray.slice(1, subarray.length))

  const toggleModal = (index) => {
    showScroll(false)
    setShowModal(!showModal)
    setSelectedProject(index)
  }

  gsap.to('.title', {
    opacity: '1',
    ease: 'power1.easeInOut',
    scrollTrigger: {
      trigger: '#transition-logo-1',
      start: "center 10vh",
      end: 'center 10vh',
      scrub: 0.2,
      once: true
    }
  })

  gsap.to('.list-project', {
    opacity: '1',
    ease: 'power1.easeInOut',
    scrollTrigger: {
      trigger: '#transition-logo-1',
      start: "center 10vh",
      end: 'center 10vh',
      scrub: 0.2,
      once: true
    }
  })

  return (
    <>
      <div className='projects' id='projects'>
        <div className='title'>
          <h1 className='titles'>projetos</h1>
        </div>
        <div className='list-project'>
          {organizedProjects.map((row, rowIndex) => (
            <div key={rowIndex} className='row'>
              {row.map((project, index) => {
                if (index === 0) {
                  return <Project key={project.id} project={project} toggleModal={toggleModal} />
                }
                if (index === 1) {
                  return (
                    <div key={index} className='group-projects'>
                      {colums[rowIndex].map((columProject) =>
                        columProject ? (
                          <Project key={columProject.id} project={columProject} toggleModal={toggleModal} />
                        ) : null
                      )}
                    </div>
                  )
                }
                return null
              })}
            </div>
          ))}
        </div>
      </div>
      <ModalProject index={selectedProject} setSelectedProject={setSelectedProject} showModal={showModal} toggleModal={setShowModal} showScroll={showScroll} projects={sortedProjects} />
    </>
  )
}